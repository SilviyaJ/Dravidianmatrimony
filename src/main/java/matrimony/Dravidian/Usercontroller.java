package matrimony.Dravidian;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Usercontroller {
	
	@Autowired
	Userservice service;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	Resourceservice ser;
	
	@PostMapping("/signup")
	public Resource signingup(@RequestBody Resource res) {
		String newone=encoder.encode(res.getPassword());
		res.setPassword(newone);
		return ser.implementSave(res);
	}
	
	@DeleteMapping("/delall/{tp}")
	public List<String> callingDeleteMany(@PathVariable("tp") String tp){
		return service.makedeleteByCustom(tp);
		
	}
	
	@DeleteMapping("/delid/{ind}")
	public String callingDeleteById(@PathVariable("ind") int ind) {
		return service.makeDeleteID(ind);
	}
	
	@PutMapping("/up")
	public Users callingUpdate(@RequestBody Users use) {
		return service.makenewone(use);
	}
	
	@GetMapping("/bylive/{will}")
	public List<String> callingReadPlace(@PathVariable("will") String will){
		return service.makeReadByPlace(will);
	}
	
	@GetMapping("/bytwo/{one}/{two}")
	public List<Users> callingReadTwo(@PathVariable("one") String one,@PathVariable("two") double two) {
		return service.makeReadByOccupationAndHeight(one, two);
	}
	
	@DeleteMapping("/del")
	public String callingDelete(@RequestBody Users sell) {
		return service.makeDelete(sell);
	}
	
	@GetMapping("/bystudy/{study}")
	public List<Users> callingReadByqualification(@PathVariable("study") String study){
		return service.makeReadByqualification(study);
	}
	
	@GetMapping("/byplace/{place}")
	public List<Users> callingReadBylocation(@PathVariable("place") String place){
		return service.makeReadBylocation(place);
	}
	
	@GetMapping("/bywork/{work}")
	public Optional<Users> callingReadByoccupation(@PathVariable("work") String work){
		return service.makeReadByoccupation(work);
	}
	
	@GetMapping("/{hey}")
	public Optional<Users> callingRead(@PathVariable("hey") int hey){
		return service.makeRead(hey);
	}
	
	@GetMapping("/")
	public List<Users> callingOrder(){
		return service.makeFetchAll();
	}
	
	@PostMapping("/new")
	public Users callingcreate (@RequestBody Users use) {
		return service.makenewone(use);
	}

}
