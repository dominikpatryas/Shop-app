using System;
using System.Collections.Generic;
using Shop.API.Models;

namespace Shop.API.Dtos
{
    public class CarForListsDto
    {
      
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string Engine { get; set; }
        public string HorsePower { get; set; }
        public string Acceleration { get; set; }
        public string Gear { get; set; }
        public int Year { get; set; }

        public int Price { get; set; }
        public string PhotoUrl { get; set; }

        public ICollection<Photo> Photos { get;set; }

         public DateTime Rent { get; set; }
        public DateTime EndRent { get; set; }
        public bool isRent { get; set; }

    }
}