package com.vimanishi.ems_backend.service.impl;

import com.vimanishi.ems_backend.service.EmployeeService;
import com.vimanishi.ems_backend.mapper.EmployeeMapper;
import lombok.AllArgsConstructor;
import com.vimanishi.ems_backend.entity.Employee;
import com.vimanishi.ems_backend.exception.ResourceNotFoundException;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import com.vimanishi.ems_backend.dto.EmployeeDto;
import com.vimanishi.ems_backend.repository.EmployeeRepository;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
    
    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
            .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id: " + employeeId));

        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee))
                    .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {

        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
            () -> new ResourceNotFoundException("Employee does not exist with id: " + employeeId)
        );

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());

        Employee updatedEmployeeObj = employeeRepository.save(employee);
        
        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {

        employeeRepository.findById(employeeId).orElseThrow(
            () -> new ResourceNotFoundException("Employee does not exist with id: " + employeeId)
        );

        employeeRepository.deleteById(employeeId);
    }

}
