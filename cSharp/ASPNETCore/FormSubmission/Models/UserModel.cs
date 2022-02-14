using System;
using System.ComponentModel.DataAnnotations;

namespace FormSubmission.Models
{
  public class User
  {
    [Required]
    [MinLength(2)]
    [MaxLength(32)]
    [Display(Name = "First Name")]
    public string FirstName { get; set; }

    [Required]
    [MinLength(2)]
    [MaxLength(32)]
    [Display(Name = "Last Name")]
    public string LastName { get; set; }

    [Required]
    [Range(0, 115)]
    public int Age { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [MinLength(8)]
    [MaxLength(32)]
    public string Password { get; set; }

    [Required]
    // [FutreDateAttribue]
    public DateTime Date { get; set; }
  }

  public class FutureDateAttribute : ValidationAttribute
  {
    // public DateTime Date { get; set; }
    // public FutureDateAttribute(DateTime date)
    // {
    //   Date = date;
    // }

    // public string GetErrorMessage() => $"Date must be earlier than {Date}";

    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
      if (value is DateTime)
      {
        DateTime dt = (DateTime)value;
        if (0 >= DateTime.Compare(DateTime.Today, dt))
        {
          return ValidationResult.Success;
        }
      }
      return new ValidationResult("Date must not be in the future.");
    }
  }
}