#pragma checksum "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\FormSubmission\Views\Home\Result.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "9fd9585e70d4d0d253dda4d4c78d756e30c1bf5f"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Result), @"mvc.1.0.view", @"/Views/Home/Result.cshtml")]
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
#line 1 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\FormSubmission\Views\_ViewImports.cshtml"
using FormSubmission;

#line default
#line hidden
#nullable disable
#nullable restore
#line 1 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\FormSubmission\Views\Home\Result.cshtml"
using FormSubmission.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9fd9585e70d4d0d253dda4d4c78d756e30c1bf5f", @"/Views/Home/Result.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"eee8ebcfc15afbef5ef7fe8ba1aeeb298d01b049", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Result : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<User>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n<div class=\"container text-center w-50 mx-auto\">\r\n\r\n\r\n  <h1 class=\"mt-3 \">Results</h1>\r\n\r\n  <p>");
#nullable restore
#line 9 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\FormSubmission\Views\Home\Result.cshtml"
Write(Model.FirstName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n  <p>");
#nullable restore
#line 10 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\FormSubmission\Views\Home\Result.cshtml"
Write(Model.LastName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n  <p>");
#nullable restore
#line 11 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\FormSubmission\Views\Home\Result.cshtml"
Write(Model.Age);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n  <p>");
#nullable restore
#line 12 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\FormSubmission\Views\Home\Result.cshtml"
Write(Model.Email);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n  <p>");
#nullable restore
#line 13 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\FormSubmission\Views\Home\Result.cshtml"
Write(Model.Password);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n\r\n</div>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<User> Html { get; private set; }
    }
}
#pragma warning restore 1591
