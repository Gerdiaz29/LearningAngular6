using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using LearningAngular6.Model;
using LearningAngular6.Repository;

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
            lugaresRepository.SaveLugar(lugar);
            return CreatedAtRoute("GetLugar", new { id = lugar.Id }, lugar);

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public ActionResult<Lugar> UpdateLugar(int id, [FromBody]Lugar lugar)
        {
            int updatedResponse = lugaresRepository.UpdateLugar(lugar);
            if (updatedResponse != 0)
                return NotFound();
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
