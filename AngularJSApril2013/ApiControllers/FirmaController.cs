using System;
using System.Collections.Generic;
using System.Linq;
using AngularJSApril2013.Entities;

namespace AngularJSApril2013.ApiControllers
{
    public class FirmaController : BaseApiController
    {
        public IEnumerable<Firma> Get()
        {
            return DbContext.Firmen.ToList();
        }
    }
}