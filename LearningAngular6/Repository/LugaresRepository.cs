using LearningAngular6.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LearningAngular6.Repository
{
    public class LugaresRepository : ILugaresRepository
    {
        private readonly PlatziSquareDbContext _dbContext;

        public LugaresRepository(PlatziSquareDbContext dBContext)
        {
            _dbContext = dBContext;
        }

        public List<Lugar> GetLugares()
        {
            try
            {

                return _dbContext.Lugares.ToList();
            }
            catch (Exception ex)
            {
                return new List<Lugar>();
            }

        }

        public Lugar GetLugar(int id)
        {
            var enrollment = _dbContext.Lugares.FirstOrDefault(w => w.Id == id);
            return enrollment;
        }

        public bool DeleteLugar(int id)
        {
            var lugar = _dbContext.Lugares.FirstOrDefault(i => i.Id == id);

            if (lugar != null)
            {
                _dbContext.Lugares.Remove(lugar);
            }
            return _dbContext.SaveChanges() >= 1;
        }

        public bool GuardarLugar(Lugar model)
        {
            Lugar lugar = _dbContext.Lugares.Where(w => w.Id == model.Id).FirstOrDefault();

            if (lugar == null)
            {
                lugar = new Lugar()
                {
                    Nombre = model.Nombre,
                    Descripcion = model.Descripcion,
                    Distancia = model.Distancia,
                    Cercania = model.Cercania,
                    Plan = model.Plan,
                    Lat = model.Lat,
                    Lng = model.Lng,
                    Calle = model.Calle,
                    Ciudad = model.Ciudad,
                    Pais = model.Pais,
                    FechaDeCreacion = model.FechaDeCreacion,
                };
                _dbContext.Lugares.Add(lugar);
            }
            else
            {
                lugar.Nombre = model.Nombre;
                lugar.Descripcion = model.Descripcion;
                lugar.Distancia = model.Distancia;
                lugar.Cercania = model.Cercania;
                lugar.Plan = model.Plan;
                lugar.Lat = model.Lat;
                lugar.Lng = model.Lng;
                lugar.Calle = model.Calle;
                lugar.Ciudad = model.Ciudad;
                lugar.Pais = model.Pais;
                lugar.FechaDeActualizacion = model.FechaDeActualizacion;
            }
            return _dbContext.SaveChanges() >= 1;
        }

        internal int SaveLugar(Lugar lugar)
        {
            try
            {
                _dbContext.Lugares.Update(lugar);
                _dbContext.SaveChanges();
                return 0;
            }
            catch (DbUpdateException ex)
            {
                return ex.HResult;
            }
            catch (Exception ex)
            {
                return ex.HResult;
            }
        }

        public Lugar GetLugarById(int id)
        {
            var enrollment = _dbContext.Lugares.FirstOrDefault(w => w.Id == id);
            return enrollment;
        }
    }
}
