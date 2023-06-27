using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Domain;
using Microsoft.IdentityModel.Tokens;

namespace API.Services
{
  public class TokenService
  {
    private readonly IConfiguration _config;

    public TokenService(IConfiguration config)
    {
      _config = config;
    }
    public string CreateToken(AppUser user)
    {
      var claims = new List<Claim> //this claim will get fro System.Security.Claims
      {
        //this claim takes two value one is type and second one is value for it.
        new Claim(ClaimTypes.Name,user.UserName),
        new Claim(ClaimTypes.NameIdentifier,user.Id),
        new Claim(ClaimTypes.Email,user.Email),
      };

      // we have install identityModel.token.JWT in API.csproj
      var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["TokenKey"]));

      var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(claims),
        Expires = DateTime.UtcNow.AddDays(7),
        SigningCredentials = creds
      };

      var tokenHandler = new JwtSecurityTokenHandler();

      var token = tokenHandler.CreateToken(tokenDescriptor);

      return tokenHandler.WriteToken(token);
    }
  }
}