using System;
using System.Collections.Generic;
using Shop.API.Models;

namespace Shop.API.Dtos
{
    public class CarForListsDto
    {
        public CarForListsDto(int id, string brand, string model, string engine, string horsePower, string acceleration, string gear, int year, int price, DateTime rent) 
        {
            this.Id = id;
                this.Brand = brand;
                this.Model = model;
                this.Engine = engine;
                this.HorsePower = horsePower;
                this.Acceleration = acceleration;
                this.Gear = gear;
                this.Year = year;
                this.Price = price;
                this.Rent = rent;
               
        }
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

    }
}