using Microsoft.EntityFrameworkCore;

namespace LearningAngular6.Model
{
    public class PlatziSquareDbContext : DbContext
  {
    public PlatziSquareDbContext(DbContextOptions<PlatziSquareDbContext> options) : base(options) { }

    public virtual DbSet<Lugar> Lugares { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.ForSqlServerUseIdentityColumns();
      modelBuilder.Entity<Lugar>().ToTable("Lugares");
    }
  }
}
