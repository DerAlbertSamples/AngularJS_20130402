using System;
using System.ComponentModel.DataAnnotations;

namespace AngularJSApril2013.Entities
{
    public class Contact
    {
        [StringLength(256)]
        [DataType(DataType.EmailAddress)]
        public string EMail { get; set; }
        
        [StringLength(256)]
        [DataType(DataType.Html)]
        public string Homepage { get; set; }
    }
}