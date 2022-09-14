package matrimony.Dravidian;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNotSame;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertSame;
import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
class DravidianApplicationTests {

	
	@MockBean
	Userinterface repo;
	
	@Autowired
	Userservice serv;
	
	@Test
	public void testingAllByOccupationAndHeight() {
		Users u1=new Users (14,"jes","female","physics","designer","pune",5.5,70.0,"joshua","sharon",1,"politeattitude");
		Users u2=new Users (17,"sil","female","journalism","journalist","kerala",5.7,60.0,"josh","sharon",2,"decentjob");
		Users u3=new Users (19,"jim","male","computerscience","designer","pune",5.6,65.0,"jack","mary",4,"governmentjob");
		 when(repo.findALLByOccupationAndHeight("designer", 5.5)).thenReturn(Stream.of(u1,u3).collect(Collectors.toList()));
		 assertNotSame(u2,serv.makeReadByOccupationAndHeight("designer", 5.5) .get(0));
	}
	@Test
	public void testingAllByLocation() {
		Users u1=new Users (14,"jes","female","physics","designer","pune",5.5,70.0,"joshua","sharon",1,"politeattitude");
		Users u2=new Users (17,"sil","female","journalism","journalist","kerala",5.7,60.0,"josh","sharon",2,"decentjob");
		Users u3=new Users (19,"jim","male","computerscience","analyst","pune",5.6,65.0,"jack","mary",4,"governmentjob");
		
		when(repo.findAllByLocation("pune")).thenReturn(Stream.of(u1,u3).collect(Collectors.toList()));
		assertNotEquals(u2, serv.makeReadBylocation("pune").get(0));
	}
	
	@Test
	public void testingDelete() {
		Users u1=new Users (14,"jes","female","physics","designer","manipur",5.5,70.0,"joshua","sharon",1,"politeattitude");
		repo.delete(u1);
		verify(repo,times(1)).delete(u1);
		
	}
	@Test
	public void testingRead() {
		Optional<Users> u1= Optional.of(new Users (14,"jes","female","physics","designer","manipur",5.5,70.0,"joshua","sharon",1,"politeattitude"));
		Optional<Users> u2=Optional.of(new Users (17,"sil","female","journalism","journalist","kerala",5.7,60.0,"josh","sharon",2,"decentjob"));
		
		when(repo.findById(14)).thenReturn(u1);
		when(repo.findById(17)).thenReturn(u2);
		
		assertEquals(u1, serv.makeRead(14));
		assertTrue(serv.makeRead(17).get().getUsername().equals(u2.get().getUsername()));
	}
	
	@Test
	public void testingCreate() {
		Users u1=new Users (14,"jes","female","physics","designer","manipur",5.5,70.0,"joshua","sharon",1,"politeattitude");
		Users u2=new Users (17,"sil","female","journalism","journalist","kerala",5.7,60.0,"josh","sharon",2,"decentjob");
		
		when(repo.save(u1)).thenReturn(u1);
		when(repo.save(u2)).thenReturn(u2);
		
//		assertTrue(serv.makenewone(u1).getFathername().equals("joshua"));
//		assertNotNull(serv.makenewone(u2).getOccupation());
	}
	
	@Test
	public void testing(){
		Users u1=new Users (14,"jes","female","physics","designer","manipur",5.5,70.0,"joshua","sharon",1,"politeattitude");
		Users u2=new Users (17,"sil","female","journalism","journalist","kerala",5.7,60.0,"josh","sharon",2,"decentjob");
		Users u3=null;
		
		when(repo.findAll()).thenReturn(Stream.of(u1,u2,u3).collect(Collectors.toList()));
		assertSame(3,serv.makeFetchAll().size());
		assertNull(serv.makeFetchAll().get(2));
		

	}
	@Test
	void contextLoads() {
	}

}
