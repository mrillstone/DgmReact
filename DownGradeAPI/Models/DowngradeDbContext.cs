using Microsoft.EntityFrameworkCore;

namespace DownGradeAPI.Models
{
    public class DowngradeDbContext : DbContext
    {
        public DowngradeDbContext(DbContextOptions<DowngradeDbContext> options) : base(options)
        {
            
        }
        public DbSet<Dispatch> Dispatches { get; set; }
        public DbSet<Contributor> Contributors { get; set; }
    }
}