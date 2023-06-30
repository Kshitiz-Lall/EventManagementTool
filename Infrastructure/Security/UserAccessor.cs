using Microsoft.AspNetCore.Http;
using Application.Interfaces;
using System.Security.Claims;

namespace Infrastructure.Security
{
  public class UserAccessor : IUserAccessor
  {
    private readonly IHttpContextAccessor _httpContextAccessor;
    public UserAccessor(IHttpContextAccessor httpContextAccessor)
    {
      _httpContextAccessor = httpContextAccessor;

    }
    string IUserAccessor.GetUsername()
    {
      return _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name);
    }
  }
}