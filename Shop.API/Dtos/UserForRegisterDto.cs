using System;
using System.ComponentModel.DataAnnotations;

namespace Shop.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8,MinimumLength = 4, ErrorMessage = "You must choose password between 4 and 8 characters.")]
        public string Password { get; set; }  
        [Required]
        public string Gender { get; set; }  
        [Required]
        public string City { get; set; }  
        [Required]
        public string Country { get; set; }  
        [Required]
        public DateTime DateOfBirth { get; set; }  
    }
}