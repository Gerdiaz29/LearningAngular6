using LearningAngular6.Model;

namespace LearningAngular6.Data
{
    public class DBInit
  {
    public static void Init(PlatziSquareDbContext platziSquareDbContext)
    {
      platziSquareDbContext.Database.EnsureCreated();
      //if (platziSquareDbContext.Lugares.Any())
      //{
      //  return;
      //}

      //var lugares = new Lugar[] {
      //          new Lugar {Nombre="Floreria la Gardenia", Descripcion="No Existe descripcion en este momento, proximamente sera agregado", Plan="pagado", Distancia=1,Cercania=1 },
      //          new Lugar {Nombre="Donas la Pasadita", Descripcion="No Existe descripcion en este momento, proximamente sera agregado", Plan="gratuito", Distancia=1.8, Cercania=1},
      //          new Lugar {Nombre="Veterinaria Huellitas Felices", Descripcion="No Existe descripcion en este momento, proximamente sera agregado", Plan="gratuito", Distancia=5, Cercania=2},
      //          new Lugar {Nombre="Sushi Suhiroll",Descripcion="No Existe descripcion en este momento, proximamente sera agregado", Plan="gratuito", Distancia=10, Cercania=3},
      //          new Lugar {Nombre="Hotel la Gracia",Descripcion="No Existe descripcion en este momento, proximamente sera agregado", Plan="pagado", Distancia=35, Cercania=3},
      //          new Lugar {Nombre="Zapateria el Clavo",Descripcion="No Existe descripcion en este momento, proximamente sera agregado", Plan="gratuito", Distancia=120, Cercania=3},
      //          };
      //foreach (var lugar in lugares)
      //{
      //  platziSquareDbContext.Lugares.Add(lugar);
      //}
      //platziSquareDbContext.SaveChanges();
    }
  }
}
