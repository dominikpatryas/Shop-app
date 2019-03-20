using AutoMapper;
using Shop.API.Dtos;
using Shop.API.Models;

namespace Shop.API.Helpers
{
    public class Automapper : Profile
    {
        public Automapper() {
            CreateMap<UserForRegisterDto, User>();
        }
    }
}