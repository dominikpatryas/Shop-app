using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Shop.API.Models;

namespace Shop.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;
        public AuthRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<User> Login(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Username == username);

            if(user == null)
                return null;

            return user;
        }

       
        public async Task<User> Register(User user, string password)
        {
          
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        

        public Task<bool> UserExists(string username)
        {
            throw new System.NotImplementedException();
        }
    }
}