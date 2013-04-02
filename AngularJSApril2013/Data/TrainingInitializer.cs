using System;
using System.Data.Entity;

namespace AngularJSApril2013.Data
{
    public class TrainingInitializer : DropCreateDatabaseIfModelChanges<TrainingContext>
    {
        protected override void Seed(TrainingContext context)
        {
            base.Seed(context);
            DataSeeder.Seed(context);
        }
    }
}