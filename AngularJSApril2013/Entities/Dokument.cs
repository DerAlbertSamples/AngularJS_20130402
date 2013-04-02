using System;

namespace AngularJSApril2013.Entities
{
    public class Dokument
    {
        public int Id { get; set; }
        public string ContentType { get; set; }
        public string Filename { get; set; }
        public byte[] Bytes { get; set; }
    }
}