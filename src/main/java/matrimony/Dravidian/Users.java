package matrimony.Dravidian;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Users {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="customer_ID")
	private int userID;
	@Column(name="customer_name")
	private String username;
	@Column(name="customer_gender")
	private String gender;
	@Column(name="customer_qualification")
	private String qualification;
	@Column(name="customer_occupation")
	private String occupation;
	@Column(name="customer_location")
	private String location;
	@Column(name="customer_height")
	private double height;
	@Column(name="customer_weight")
	private double weight;
	@Column(name="customer_fathername")
	private String fathername;
	@Column(name="customer_mothername")
	private String mothername;
	@Column(name="customer_silblingscount")
	private int siblingscount;
	@Column(name="customer_expectation")
	private String expectation;
}
