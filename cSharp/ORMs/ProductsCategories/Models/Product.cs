using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProductsCategories.Models
{
  public class Product
  {
    [Key]
    public int ProductId { get; set; }

    [Required]
    [MinLength(2)]
    public string Name { get; set; }

    [Required]
    [MinLength(2)]
    public string Description { get; set; }

    [Required]
    [DataType(DataType.Currency)]
    [Range(0.01, 9999.99)]
    public float Price { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
    public List<Association> Types { get; set; }
  }
}