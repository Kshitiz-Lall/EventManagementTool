using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
  public class Seed
  {
    public static async Task SeedData(DataContext context,
        UserManager<AppUser> userManager)
    {
      if (!userManager.Users.Any() && !context.Activities.Any())
      {
        var users = new List<AppUser>
                {
                    new AppUser
                    {
                        DisplayName = "Bob",
                        UserName = "bob",
                        Email = "bob@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Jane",
                        UserName = "jane",
                        Email = "jane@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Tom",
                        UserName = "tom",
                        Email = "tom@test.com"
                    },
                };

        foreach (var user in users)
        {
          await userManager.CreateAsync(user, "Pa$$w0rd");
        }

        var activities = new List<Activity>
{
    new Activity
    {
        Title = "Summer Cocktail Mixer",
        Date = DateTime.UtcNow.AddMonths(-2),
        Description = "Join us for a fun evening of refreshing drinks and great conversations at a popular pub in London.",
        Category = "drinks",
        City = "London",
        Venue = "The Shoreditch Pub",
        Attendees = new List<ActivityAttendee>
        {
            new ActivityAttendee
            {
                AppUser = users[0],
                IsHost = true
            }
        }
    },
    new Activity
    {
        Title = "Art Exhibition: Monet and the Impressionists",
        Date = DateTime.UtcNow.AddMonths(-1),
        Description = "Discover the mesmerizing world of Impressionist art at the renowned Louvre Museum in Paris.",
        Category = "culture",
        City = "Paris",
        Venue = "The Louvre",
        Attendees = new List<ActivityAttendee>
        {
            new ActivityAttendee
            {
                AppUser = users[0],
                IsHost = true
            },
            new ActivityAttendee
            {
                AppUser = users[1],
                IsHost = false
            },
        }
    },
    new Activity
    {
        Title = "Live Music Concert: Rock Fest 2023",
        Date = DateTime.UtcNow.AddMonths(1),
        Description = "Experience the energy and excitement of live music performances by top artists at Wembley Stadium in London.",
        Category = "music",
        City = "London",
        Venue = "Wembley Stadium",
        Attendees = new List<ActivityAttendee>
        {
            new ActivityAttendee
            {
                AppUser = users[2],
                IsHost = true
            },
            new ActivityAttendee
            {
                AppUser = users[1],
                IsHost = false
            },
        }
    },
    new Activity
    {
        Title = "Gourmet Food Tasting: A Culinary Journey",
        Date = DateTime.UtcNow.AddMonths(2),
        Description = "Indulge in a delightful culinary experience featuring a variety of gourmet dishes at Jamie's Italian in London.",
        Category = "food",
        City = "London",
        Venue = "Jamie's Italian",
        Attendees = new List<ActivityAttendee>
        {
            new ActivityAttendee
            {
                AppUser = users[0],
                IsHost = true
            },
            new ActivityAttendee
            {
                AppUser = users[2],
                IsHost = false
            },
        }
    },
    new Activity
    {
        Title = "Pub Quiz Night",
        Date = DateTime.UtcNow.AddMonths(3),
        Description = "Test your knowledge and have a great time with friends at a lively pub quiz night in London.",
        Category = "drinks",
        City = "London",
        Venue = "The Kings Head",
        Attendees = new List<ActivityAttendee>
        {
            new ActivityAttendee
            {
                AppUser = users[1],
                IsHost = true
            },
            new ActivityAttendee
            {
                AppUser = users[0],
                IsHost = false
            },
        }
    },
    new Activity
    {
        Title = "Museum Tour: Ancient Civilizations",
        Date = DateTime.UtcNow.AddMonths(4),
        Description = "Explore the rich history and artifacts of ancient civilizations at the British Museum in London.",
        Category = "culture",
        City = "London",
        Venue = "British Museum",
        Attendees = new List<ActivityAttendee>
        {
            new ActivityAttendee
            {
                AppUser = users[1],
                IsHost = true
            }
        }
    },
    new Activity
    {
        Title = "Rooftop Bar Social",
        Date = DateTime.UtcNow.AddMonths(5),
        Description = "Enjoy breathtaking views of London's skyline while sipping delicious cocktails at the Punch and Judy rooftop bar.",
        Category = "drinks",
        City = "London",
        Venue = "Punch and Judy",
        Attendees = new List<ActivityAttendee>
        {
            new ActivityAttendee
            {
                AppUser = users[0],
                IsHost = true
            },
            new ActivityAttendee
            {
                AppUser = users[1],
                IsHost = false
            },
        }
    },
    new Activity
    {
        Title = "Concert: Legends of Rock",
        Date = DateTime.UtcNow.AddMonths(6),
        Description = "Experience the iconic sounds of legendary rock bands at the O2 Arena in London.",
        Category = "music",
        City = "London",
        Venue = "The O2 Arena",
        Attendees = new List<ActivityAttendee>
        {
            new ActivityAttendee
            {
                AppUser = users[2],
                IsHost = true
            },
            new ActivityAttendee
            {
                AppUser = users[1],
                IsHost = false
            },
        }
    },
    new Activity
    {
        Title = "Weekend Getaway: Exploring Berlin",
        Date = DateTime.UtcNow.AddMonths(7),
        Description = "Embark on an exciting weekend adventure exploring the vibrant city of Berlin and its famous landmarks.",
        Category = "travel",
        City = "Berlin",
        Venue = "Various Locations",
        Attendees = new List<ActivityAttendee>
        {
            new ActivityAttendee
            {
                AppUser = users[0],
                IsHost = true
            },
            new ActivityAttendee
            {
                AppUser = users[2],
                IsHost = false
            },
        }
    },
    new Activity
    {
        Title = "Pub Crawl Night",
        Date = DateTime.UtcNow.AddMonths(8),
        Description = "Join us for a night of pub hopping, exploring the best pubs and bars in London's vibrant nightlife scene.",
        Category = "drinks",
        City = "London",
        Venue = "Various Pubs",
        Attendees = new List<ActivityAttendee>
        {
            new ActivityAttendee
            {
                AppUser = users[2],
                IsHost = true
            },
            new ActivityAttendee
            {
                AppUser = users[1],
                IsHost = false
            },
        }
    }
};

        await context.Activities.AddRangeAsync(activities);
        await context.SaveChangesAsync();
      }
    }
  }
}