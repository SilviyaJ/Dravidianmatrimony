package matrimony.Dravidian;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class DravidianApplication {

	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	Resourceservice servi;
	
	public static void main(String[] args) {
		SpringApplication.run(DravidianApplication.class, args);
	}
	
//	@PostConstruct
//	public void  tmp() {
//			Resource res=new Resource();
//			
//			res.setUsername("silviya");res.setPassword(encoder.encode("jessy"));;res.setEmail("sil22@gmail.com");
//			res.setMobile(489675369L);
//			servi.implementSave(res);
//		}
	}


