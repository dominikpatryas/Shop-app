using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Shop.API.Data;

namespace Shop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly ICarRepository _repo;
        private readonly IMapper _mapper;
        public CarController(ICarRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
    [HttpGet("{id}")]
    public async Task<IActionResult> GetCar(int id)
    {
        var car = await _repo.GetCar(id);

        return Ok(car);
    }

    [HttpGet]
    public async Task<IActionResult> GetCars()
    {
        var cars = await _repo.GetCars();

        return Ok(cars);
    }

    }

}