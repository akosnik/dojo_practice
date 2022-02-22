using System.ComponentModel.DataAnnotations;

namespace LoginReg.Models
{
  public class LogUser
  {
    [Required]
    [Display(Name = "Email")]
    [EmailAddress(ErrorMessage = "Not a valid email address.")]
    public string LogEmail { get; set; }
    [Required]
    [Display(Name = "Password")]
    [DataType(DataType.Password)]
    public string LogPassword { get; set; }
  }
}