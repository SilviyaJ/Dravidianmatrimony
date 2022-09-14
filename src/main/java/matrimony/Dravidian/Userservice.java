package matrimony.Dravidian;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Userservice {
	
	@Autowired
	Userinterface obj;
	
	public List<String> makedeleteByCustom (String tp){
		List<String> tmp=obj.findAllByLocationLikes(tp);
		obj.deleteAllByCustomize(tp);
		return tmp;
	}
	
	public String makeDeleteID(int key) {
		Users us=obj.findById(key).orElse(null);
		String msg=us.getUsername()+"has deleted";
		obj.deleteById(key);
		return msg;
	}
	
	
	public List<String> makeReadByPlace(String loc){
		return obj.findAllByPlace(loc);
	}
	
	
	public List<Users> makeReadByOccupationAndHeight(String alpha,double beta){
		return obj.findALLByOccupationAndHeight(alpha, beta);
	}
	
	public String makeDelete(Users use)
	{
		String msg=use.getUsername()+"has deleted";
		obj.delete(use);
		return msg;
	}
	public List<Users> makeReadByqualification(String sill){
		return obj.findALLByQualification(sill);
	}
	
	public List<Users> makeReadBylocation(String gill){
		return obj.findAllByLocation(gill);
	}
	
	public Optional <Users> makeReadByoccupation(String will){
		return obj.findByOccupation(will);
	}
	
//	findID
	public Optional <Users> makeRead(int key){
		return obj.findById(key);
	}
	
//	findAll
	public List<Users> makeFetchAll(){
		return(List<Users>) obj.findAll();
	}
	
//	save
	public Users makenewone(Users use) {
		return obj.save(use);
	}

}
