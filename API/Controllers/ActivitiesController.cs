using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
  public class ActivitiesController:BaseApiController
    {
    //private readonly DataContext _context;
     // _context = context;
    //  this.context = context;  
        [HttpGet] //api/activities
        public async Task<ActionResult<List<Activity>>>GetActivities()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")] //api/activities/anyid
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }
    }
}