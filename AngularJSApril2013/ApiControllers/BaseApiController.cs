using System;
using System.Web.Http;
using AngularJSApril2013.Data;

namespace AngularJSApril2013.ApiControllers
{
    public class BaseApiController : ApiController
    {
        readonly Lazy<TrainingContext> _dbContext = new Lazy<TrainingContext>(() => new TrainingContext());

        public TrainingContext DbContext
        {
            get { return _dbContext.Value; }
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);
            if (!disposing) return;

            if (_dbContext.IsValueCreated)
                _dbContext.Value.Dispose();
        }
    }
}