using System.Linq;
using AutoMapper;
using Shop.API.Dtos;
using Shop.API.Models;

namespace Shop.API.Helpers
{
    public class Automapper : Profile
    {
        public Automapper() {
            CreateMap<UserForRegisterDto, User>();
            CreateMap<Car,CarForListsDto>().ForMember(dest => dest.PhotoUrl, opt => {
                        opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                    });
        }
    }
}