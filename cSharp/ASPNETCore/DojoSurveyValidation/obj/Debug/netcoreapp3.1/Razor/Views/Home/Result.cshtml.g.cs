#pragma checksum "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\DojoSurveyValidation\Views\Home\Result.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "279d074cdac450284c551f23c46e0e4c07764b80"
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
#line 1 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\DojoSurveyValidation\Views\_ViewImports.cshtml"
using DojoSurveyValidation;

#line default
#line hidden
#nullable disable
#nullable restore
#line 1 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\DojoSurveyValidation\Views\Home\Result.cshtml"
using DojoSurveyValidation.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"279d074cdac450284c551f23c46e0e4c07764b80", @"/Views/Home/Result.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a024f8a5533dc9edb8f42b9eacd75f35085f98a9", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Result : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Survey>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n<div class=\"container w-50 mx-auto\">\r\n\r\n  <div class=\"bordered w-50\">\r\n    <h1 class=\"mt-3 \">Results</h1>\r\n\r\n    <p>");
#nullable restore
#line 9 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\DojoSurveyValidation\Views\Home\Result.cshtml"
  Write(Model.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n    <p>");
#nullable restore
#line 10 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\DojoSurveyValidation\Views\Home\Result.cshtml"
  Write(Model.Location);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n    <p>");
#nullable restore
#line 11 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\DojoSurveyValidation\Views\Home\Result.cshtml"
  Write(Model.Language);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n    <p>");
#nullable restore
#line 12 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\DojoSurveyValidation\Views\Home\Result.cshtml"
  Write(Model.Comment);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n\r\n  </div>\r\n</div>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Survey> Html { get; private set; }
    }
}
#pragma warning restore 1591
