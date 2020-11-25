using System;
using System.ComponentModel.DataAnnotations;

namespace DownGradeAPI.Models
{
    public class Dispatch
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Photographer { get; set; }
        public string Location { get; set; }
    //    public DateTime Date { get; set; }
        public string Description { get; set; }
    }
}