package matrimony.Dravidian;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class Matriconfigure {
	
	@Autowired
	Resourceservice serv;
	
	AuthenticationManager manager;
	
	@Bean
	public WebSecurityCustomizer share() {
		return(web)->web.ignoring().antMatchers("/api/signup");
	}
	
	@Bean
	public PasswordEncoder encoder (){
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public SecurityFilterChain sil(HttpSecurity hp) throws Exception{
		hp.authorizeRequests().antMatchers("/api/*").authenticated();
		hp.csrf().disable();
		hp.httpBasic();
		hp.formLogin();
		
		AuthenticationManagerBuilder builder=hp.getSharedObject(AuthenticationManagerBuilder.class);
		builder.userDetailsService(serv).passwordEncoder(encoder());
		manager=builder.build();
		hp.authenticationManager(manager);
		return hp.build();
		
	}

}
