using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using AngularJSApril2013.Entities;

namespace AngularJSApril2013.ApiControllers
{
    public class FirmaController : BaseApiController
    {
        public IEnumerable<Firma> GetAll()
        {
            return DbContext.Firmen.ToList();
        }
        public Firma Get(int id)
        {
            return DbContext.Firmen.Include(f=>f.Abteilungen).Single(f=>f.Id==id);
        }
    }
}