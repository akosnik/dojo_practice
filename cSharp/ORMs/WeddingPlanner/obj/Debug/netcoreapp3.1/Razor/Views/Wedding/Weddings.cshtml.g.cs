#pragma checksum "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\Wedding\Weddings.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "f7b98f8827707aafbf00097bdb0bfa0581b1861a"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Wedding_Weddings), @"mvc.1.0.view", @"/Views/Wedding/Weddings.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\_ViewImports.cshtml"
using WeddingPlanner;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\_ViewImports.cshtml"
using WeddingPlanner.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f7b98f8827707aafbf00097bdb0bfa0581b1861a", @"/Views/Wedding/Weddings.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9e9e38482b8beecdb199b7be73dfa5c3d6a2f574", @"/Views/_ViewImports.cshtml")]
    public class Views_Wedding_Weddings : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<Wedding>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n<h1>Welcome to the Wedding Planner</h1>\r\n<table class=\"table table-striped\">\r\n  <tr>\r\n    <th scope=\"col\">Wedding</th>\r\n    <th scope=\"col\">Date</th>\r\n    <th scope=\"col\">Guest Count</th>\r\n    <th scope=\"col\">Action</th>\r\n  </tr>\r\n");
#nullable restore
#line 11 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\Wedding\Weddings.cshtml"
   foreach (Wedding w in Model)
  {


#line default
#line hidden
#nullable disable
            WriteLiteral("    <tr>\r\n      <td scope=\"row\"><a");
            BeginWriteAttribute("href", " href=\"", 329, "\"", 358, 2);
            WriteAttributeValue("", 336, "/weddings/", 336, 10, true);
#nullable restore
#line 15 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\Wedding\Weddings.cshtml"
WriteAttributeValue("", 346, w.WeddingId, 346, 12, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 15 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\Wedding\Weddings.cshtml"
                                                  Write(w.Wedder1);

#line default
#line hidden
#nullable disable
            WriteLiteral(" & ");
#nullable restore
#line 15 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\Wedding\Weddings.cshtml"
                                                               Write(w.Wedder2);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a></td>\r\n      <td>");
#nullable restore
#line 16 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\Wedding\Weddings.cshtml"
     Write(w.Date.ToShortDateString());

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n      <td>");
#nullable restore
#line 17 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\Wedding\Weddings.cshtml"
     Write(w.GuestList.Count);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n");
#nullable restore
#line 18 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\Wedding\Weddings.cshtml"
        
        if (ViewBag.LoggedInUser.UserId == w.CreatorId)
        {

#line default
#line hidden
#nullable disable
            WriteLiteral("          <td><a");
            BeginWriteAttribute("href", " href=\"", 567, "\"", 603, 2);
            WriteAttributeValue("", 574, "/weddings/delete/", 574, 17, true);
#nullable restore
#line 21 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\Wedding\Weddings.cshtml"
WriteAttributeValue("", 591, w.WeddingId, 591, 12, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Delete</a></td>\r\n");
#nullable restore
#line 22 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\Wedding\Weddings.cshtml"
        }
        else if (w.GuestList.Any(gl => gl.UserId == ViewBag.LoggedInUser.UserId))
        {

#line default
#line hidden
#nullable disable
            WriteLiteral("          <td><a");
            BeginWriteAttribute("href", " href=\"", 743, "\"", 812, 4);
            WriteAttributeValue("", 750, "/weddings/cancelRsvp/", 750, 21, true);
#nullable restore
#line 25 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\Wedding\Weddings.cshtml"
WriteAttributeValue("", 771, w.WeddingId, 771, 12, false);

#line default
#line hidden
#nullable disable
            WriteAttributeValue("", 783, "/", 783, 1, true);
#nullable restore
#line 25 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\Wedding\Weddings.cshtml"
WriteAttributeValue("", 784, ViewBag.LoggedInUser.UserId, 784, 28, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Cancel RSVP</a></td>\r\n");
#nullable restore
#line 26 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\Wedding\Weddings.cshtml"
        }
        else
        {

#line default
#line hidden
#nullable disable
            WriteLiteral("          <td><a");
            BeginWriteAttribute("href", " href=\"", 888, "\"", 951, 4);
            WriteAttributeValue("", 895, "/weddings/rsvp/", 895, 15, true);
#nullable restore
#line 29 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\Wedding\Weddings.cshtml"
WriteAttributeValue("", 910, w.WeddingId, 910, 12, false);

#line default
#line hidden
#nullable disable
            WriteAttributeValue("", 922, "/", 922, 1, true);
#nullable restore
#line 29 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\Wedding\Weddings.cshtml"
WriteAttributeValue("", 923, ViewBag.LoggedInUser.UserId, 923, 28, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">RSVP</a></td>\r\n");
#nullable restore
#line 30 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\Wedding\Weddings.cshtml"
        }
      

#line default
#line hidden
#nullable disable
            WriteLiteral("    </tr>\r\n");
#nullable restore
#line 33 "C:\Users\allen\Desktop\dojo_practice\cSharp\ORMs\WeddingPlanner\Views\Wedding\Weddings.cshtml"
  }

#line default
#line hidden
#nullable disable
            WriteLiteral("</table>\r\n\r\n<a href=\"/weddings/new\" class=\"btn btn-primary\">New Wedding</a>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<Wedding>> Html { get; private set; }
    }
}
#pragma warning restore 1591
