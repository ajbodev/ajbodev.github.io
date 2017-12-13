
;__c(function(){/*!

# Engineering Mid Level - Servers - Spring Boot

**src/main/java/app/controllers/FeaturesController.java**
```java
package app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.StringJoiner;

import app.models.Features;
import app.repositories.FeaturesRepository;

@Controller
@RequestMapping(path="/features")
public class FeaturesController {
	@Autowired

	private FeaturesRepository repository;

  @RequestMapping(value="", method=RequestMethod.GET)
  public String index() {
    return "features";
  }

  @RequestMapping(value="/find/{id}", produces={"application/json"}, method=RequestMethod.GET)
  public @ResponseBody String find(@PathVariable String id) {
    Features entity = repository.findOne(Long.parseLong(id));
    return entity.toJSON();
  }

  @RequestMapping(value="/list", produces={"application/json"}, method=RequestMethod.GET)
	public @ResponseBody String list() {
    StringJoiner entities = new StringJoiner(",");
    for (Features entity : repository.findAll()) {
        entities.add(entity.toJSON());
    }
    return "[" + entities.toString() + "]";
	}

  @RequestMapping(value="/create", method=RequestMethod.POST)
  public @ResponseBody String create(
    String title,
    String description,
    String client,
    String client_priority,
    String target_date,
    String product_area
    ) {
    Features entity = new Features();
    entity.setTitle(title);
    entity.setDescription(description);
    entity.setClient(client);
    entity.setClientPriority(client_priority);
    entity.setTargetDate(target_date);
    entity.setProductArea(product_area);
    repository.save(entity);
    return "Created";
  }

  @RequestMapping(value="/update/{id}", method=RequestMethod.POST)
  public @ResponseBody String update(
    @PathVariable String id, 
    String title,
    String description,
    String client,
    String client_priority,
    String target_date,
    String product_area
    ) {
    Features entity = repository.findOne(Long.parseLong(id));
    entity.setTitle(title);
    entity.setDescription(description);
    entity.setClient(client);
    entity.setClientPriority(client_priority);
    entity.setTargetDate(target_date);
    entity.setProductArea(product_area);
    repository.save(entity);
    return "Updated";
  }

  @RequestMapping(value="/destroy/{id}", method=RequestMethod.POST)
  public @ResponseBody String destroy(@PathVariable String id) {
    repository.delete(Long.parseLong(id));
    return "Destroyed";
  }

}
```

**src/main/java/app/models/Features.java**
```java
package app.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Features {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    private String title;
    private String description;
    private String client;
    private String client_priority;
    private String target_date;
    private String product_area;

    public Long getId() {
      return id;
    }
    public void setId(Long id) {
      this.id = id;
    }

    public String getTitle() {
      return title;
    }
    public void setTitle(String title) {
      if (title != null) this.title = title;
    }
    
    public String getDescription() {
      return description;
    }
    public void setDescription(String description) {
      if (description != null) this.description = description;
    }
    
    public String getClient() {
      return client;
    }
    public void setClient(String client) {
      if (client != null) this.client = client;
    }
    
    public String getClientPriority() {
      return client_priority;
    }
    public void setClientPriority(String client_priority) {
      if (client_priority != null) this.client_priority = client_priority;
    }
    
    public String getTargetDate() {
      return target_date;
    }
    public void setTargetDate(String target_date) {
      if (target_date != null) this.target_date = target_date;
    }
    
    public String getProductArea() {
      return product_area;
    }
    public void setProductArea(String product_area) {
      if (product_area != null) this.product_area = product_area;
    }

    public String toJSON() {
        return String.format("{" + 
            "\"title\":\"%s\"," + 
            "\"description\":\"%s\"," + 
            "\"client\":\"%s\"," + 
            "\"client_priority\":\"%s\"," + 
            "\"target_date\":\"%s\"," + 
            "\"product_area\":\"%s\"," + 
            "\"id\":%d}",
            title,
            (description != null) ? description.replaceAll("(\\r|\\n|\\r\\n)+", "\\\\n") : "",
            client,
            client_priority,
            target_date,
            product_area,
            id);
    }

}
```

**src/main/java/app/models/FeaturesRepository.java**
```java
package app.repositories;

import org.springframework.data.repository.CrudRepository;

import app.models.Features;

public interface FeaturesRepository extends CrudRepository<Features, Long> {

}
```

[//]: # (@~|tech/engineering-mid-level/servers/spring-boot|~@)

*/});
