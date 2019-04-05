using System;
using System.Collections.Generic;
using System.Net.Mail;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using Shop.API.Data;
using Shop.API.Dtos;
using Shop.API.Models;

namespace Shop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly ICarRepository _repo;
        private readonly IMapper _mapper;
        public CarsController(ICarRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
    [HttpGet("{id}")]
    public async Task<IActionResult> GetCar(int id)
    {
        var car = await _repo.GetCar(id);

        var carForReturn = _mapper.Map<CarForListsDto>(car);
        return Ok(carForReturn);
    }

    [HttpGet]
    public async Task<IActionResult> GetCars()
    {
        var cars = await _repo.GetCars();

        var carsToReturn = _mapper.Map<IEnumerable<CarForListsDto>>(cars);

        return Ok(carsToReturn);
    }
     [HttpPut("{id}")]
     public async Task<IActionResult> RentCar(int id, CarForRent carForRent)
     {
         var carFromRepo = await _repo.GetCar(id);

        _mapper.Map(carForRent, carFromRepo);

         if (await _repo.SaveAll())
            return NoContent();

        throw new Exception($"Updating car {id} failed on save");

     }
        
    }

}