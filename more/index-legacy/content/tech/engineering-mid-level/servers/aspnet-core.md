
;__c(function(){/*!

# Engineering Mid Level - Servers - ASP.NET Core MVC

**Controllers/FeaturesController.cs**
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using app.Models;

namespace app.Controllers
{
    public class FeaturesController : Controller
    {
        private FeaturesContext context;

        public FeaturesController(FeaturesContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View("~/Views/Features.cshtml");
        }
        
        [HttpGet]
        public IActionResult List()
        {
            return Content(JsonConvert.SerializeObject(this.context.Features.ToList()));
        }
        
        [HttpGet]
        public IActionResult Find(long id)
        {
            Features entity = this.context.Features.Find(id);
            return Content(JsonConvert.SerializeObject(entity));
        }
        
        [HttpPost]
        public IActionResult Create(
            [Bind(@"
              title,
              description,
              client,
              client_priority,
              target_date,
              product_area
            ")]
            Features entity)
        {
            this.context.Features.Add(entity);
            this.context.SaveChanges();
            return Content("Created");
        }
        
        [HttpPost]
        public IActionResult Update(long id, 
            [Bind(@"
              id,
              title,
              description,
              client,
              client_priority,
              target_date,
              product_area
            ")]
            Features entity)
        {
            this.context.Update(entity);
            this.context.SaveChanges();
            return Content("Updated");
        }
        
        [HttpPost]
        public IActionResult Destroy(long id)
        {
            Features entity = this.context.Features.Find(id);
            this.context.Features.Remove(entity);
            this.context.SaveChanges();
            return Content("Destroyed");
        }
    }
}
```

**Models/Features.cs**
```csharp
using Microsoft.EntityFrameworkCore;

namespace app.Models
{
    public class Features
    {
        public long   id              { get; set; }
        public string title           { get; set; }
        public string description     { get; set; }
        public string client          { get; set; }
        public string client_priority { get; set; }
        public string target_date     { get; set; }
        public string product_area    { get; set; }
    }
    public class FeaturesContext : DbContext
    {
        public FeaturesContext(DbContextOptions<FeaturesContext> options)
            : base(options)
        {
        }

        public DbSet<Features> Features { get; set; }

    }
}
```

[//]: # (@~|tech/engineering-mid-level/servers/aspnet-core|~@)

*/});
