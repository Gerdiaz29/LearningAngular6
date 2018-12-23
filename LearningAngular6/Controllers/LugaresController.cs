using LearningAngular6.Model;
using LearningAngular6.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace LearningAngular6.Controllers
{
    [Route("api/[controller]")]
    public class LugaresController : Controller
    {
        private readonly PlatziSquareDbContext _context;
        private readonly LugaresRepository lugaresRepository;

        public LugaresController(PlatziSquareDbContext context)
        {
            _context = context;
            lugaresRepository = new LugaresRepository(_context);
        }
        // GET api/values
        [HttpGet]
        public IEnumerable<Lugar> Get()
        {
            var lugares = lugaresRepository.GetLugares();
            return lugares;
        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetLugar")]
        public ActionResult<Lugar> GetLugar(int id)
        {
            var lugar = lugaresRepository.GetLugarById(id);
            return lugar;
        }

        // POST api/values
        [HttpPost]
        public IActionResult SaveLugar([FromBody] Lugar lugar)
        {
            var test = lugar;
            lugaresRepository.GuardarLugar(lugar);
            return CreatedAtRoute("GetLugar", new { id = lugar.Id }, lugar);

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public ActionResult<Lugar> UpdateLugar(int id, [FromBody]Lugar lugar)
        {
            var foundlugar = _context.Lugares.Find(id);
            if (foundlugar == null)
            {
                return NotFound();
            }

            foundlugar.Nombre = lugar.Nombre;
            foundlugar.Descripcion = lugar.Descripcion;
            foundlugar.Distancia = lugar.Distancia;
            foundlugar.Cercania = lugar.Cercania;
            foundlugar.Plan = lugar.Plan;
            foundlugar.Lat = lugar.Lat;
            foundlugar.Lng = lugar.Lng;
            foundlugar.Calle = lugar.Calle;
            foundlugar.Ciudad = lugar.Ciudad;
            foundlugar.Pais = lugar.Pais;
            foundlugar.FechaDeActualizacion = lugar.FechaDeActualizacion;

            _context.Lugares.Update(foundlugar);
            _context.SaveChanges();
            return NoContent();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var enrollment = lugaresRepository.DeleteLugar(id);
        }
    }
}
