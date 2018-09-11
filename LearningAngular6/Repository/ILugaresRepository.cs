using LearningAngular6.Model;
using System.Collections.Generic;

namespace LearningAngular6.Repository
{
    public interface ILugaresRepository
  {
    List<Lugar> GetLugares();
    Lugar GetLugarById(int id);
    bool SaveLugar(Lugar enrollment);
    bool DeleteLugar(int id);
  }
}
