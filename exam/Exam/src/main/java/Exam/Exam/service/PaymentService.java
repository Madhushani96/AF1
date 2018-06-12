package Exam.Exam.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import Exam.Exam.model.Payment;
import Exam.Exam.model.PaymentRepository;


@CrossOrigin
@RestController
@RequestMapping("/book")
public class PaymentService {
	
	@Autowired
	private PaymentRepository repository;
	
	
	@RequestMapping(method=RequestMethod.POST)
	public void insert(@RequestBody Payment instance){
		
		try{
			repository.save(instance);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
	

}
