using System.Security.Claims;
using API.DTOs;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

  [ApiController]
  [Route("api/[controller]")]
  public class AccountController : ControllerBase
  {
    private readonly UserManager<AppUser> _userManager;
    private readonly TokenService _tokenService;

    public AccountController(UserManager<AppUser> userManager, TokenService tokenService)
    {
      _userManager = userManager;
      _tokenService = tokenService;
    }
    [AllowAnonymous] // this will allow anonymous user to use webportal. 
    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto logindto)
    {
      // this will give user matching entered email.
      var user = await _userManager.FindByEmailAsync(logindto.Email);

      if (user == null) return Unauthorized();

      // this will return true or false value whether given password is valid for user or not.
      var result = await _userManager.CheckPasswordAsync(user, logindto.Password);

      if (result)
      {
        return CreateUserObject(user);
      }
      return Unauthorized();
    }

    [AllowAnonymous] // this will allow anonymous user to use webportal. 
    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
    {
      //in if part will check username is already taken or not
      if (await _userManager.Users.AnyAsync(x => x.UserName == registerDto.UserName))
      {
        return BadRequest("Username is already taken");
      }

      if (await _userManager.Users.AnyAsync(x => x.Email == registerDto.Email))
      {
        return BadRequest("Email is already taken");
      }

      var user = new AppUser
      {
        DisplayName = registerDto.DisplayName,
        Email = registerDto.Email,
        UserName = registerDto.UserName
      };

      var result = await _userManager.CreateAsync(user, registerDto.Password);

      if (result.Succeeded)
      {
        return CreateUserObject(user);
      }

      return BadRequest(result.Errors);
    }

    [Authorize]
    [HttpGet]
    public async Task<ActionResult<UserDto>> GetCurrentUser()
    {
      var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

      return CreateUserObject(user);
    }

    private UserDto CreateUserObject(AppUser user)
    {
      return new UserDto
      {
        DisplayName = user.DisplayName,
        Image = null,
        Token = _tokenService.CreateToken(user),
        UserName = user.UserName
      };
    }
  }
}