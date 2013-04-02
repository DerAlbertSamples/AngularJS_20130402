using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace AngularJSApril2013.Entities
{
    public class Abteilung
    {
        public Abteilung()
        {
            Personen = new Collection<Person>();
            Dokumente = new Collection<Dokument>();
        }
        
        public int Id { get; set; }

        [StringLength(128)]
        [Required]
        public string Name { get; set; }

        public virtual ICollection<Person> Personen { get; private set; }

        public  virtual ICollection<Dokument> Dokumente { get; private set; }
    }
}