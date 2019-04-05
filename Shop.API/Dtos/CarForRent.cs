using System;

namespace Shop.API.Dtos
{
    public class CarForRent
    {
         public DateTime Rent { get; set; }
        public DateTime EndRent { get; set; }
        public bool isRent { get; set; }

    }
}