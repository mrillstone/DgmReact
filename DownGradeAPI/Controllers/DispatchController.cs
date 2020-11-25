using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DownGradeAPI.Models;
namespace DownGradeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DispatchController : ControllerBase
    {
        private readonly DowngradeDbContext _context;

        public DispatchController(DowngradeDbContext context)
        {
            _context = context;
        }
        
        // GET: api/DCandidate
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Dispatch>>> GetDispatches()
        {
            return await _context.Dispatches.ToListAsync();
        }

        // GET: api/DCandidate/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Dispatch>> GetDispatch(int id)
        {
            var dispatch = await _context.Dispatches.FindAsync(id);

            if (dispatch == null)
            {
                return NotFound();
            }

            return dispatch;
        }

        // PUT: api/DCandidate/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDispatch(int id, Dispatch dispatch)
        {
            dispatch.Id = id;

            _context.Entry(dispatch).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DispatchExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DCandidate
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Dispatch>> PostDispatch(Dispatch dispatch)
        {
            _context.Dispatches.Add(dispatch);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDispatch", new { id = dispatch.Id }, dispatch);
        }

        // DELETE: api/DCandidate/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Dispatch>> DeleteDispatch(int id)
        {
            var dispatch = await _context.Dispatches.FindAsync(id);
            if (dispatch == null)
            {
                return NotFound();
            }

            _context.Dispatches.Remove(dispatch);
            await _context.SaveChangesAsync();

            return dispatch;
        }

        private bool DispatchExists(int id)
        {
            return _context.Dispatches.Any(e => e.Id == id);
        }
    }
}
