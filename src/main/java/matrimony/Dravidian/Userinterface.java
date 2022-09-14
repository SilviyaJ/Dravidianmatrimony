package matrimony.Dravidian;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface Userinterface extends JpaRepository<Users, Integer> {
	public Optional<Users> findByOccupation(String occu);
	public List<Users> findAllByLocation(String loca);
	public List<Users> findALLByQualification(String qual);
	
	@Transactional
	@Modifying
	@Query("delete from Users where location like %:own%")
	public void deleteAllByCustomize(String own);
	
	@Query("select username from Users where location like %:tp%")
	public List<String> findAllByLocationLikes(String tp);
	
    
	@Query("select username from Users where location=:locate")
	public List<String> findAllByPlace(String locate);
	
	@Query("from Users where occupation=:oc and height>=:inch")
	public List<Users> findALLByOccupationAndHeight(String oc,double inch);
}
