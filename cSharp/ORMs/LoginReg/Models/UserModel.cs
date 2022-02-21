using System;
using System.ComponentModel.DataAnnotations;

namespace LoginReg.Models
{
  public class User
  {
    [Key]
    public int UserId { get; set; }

    [Required]
    [MinLength(2)]
    public string FirstName;

    [Required]
    [MinLength(2)]
    public string LastName;

    [Required]
    [EmailAddress]
    public string Email;

    [Required]
    [MinLength(8)]
    [DataType(DataType.Password)]
    public string Password;
  }
}