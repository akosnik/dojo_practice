#pragma checksum "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\DojoSurveyWithModel\Views\Home\Result.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "1689896fa6ac09f37eee692b831a3ba04ed2439d"
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
#line 1 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\DojoSurveyWithModel\Views\_ViewImports.cshtml"
using DojoSurveyWithModel;

#line default
#line hidden
#nullable disable
#nullable restore
#line 1 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\DojoSurveyWithModel\Views\Home\Result.cshtml"
using DojoSurveyWithModel.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"1689896fa6ac09f37eee692b831a3ba04ed2439d", @"/Views/Home/Result.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"23eee8675a923651d7066bdc158145829c668f74", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Result : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Survey>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n<div class=\"container w-50 mx-auto\">\r\n\r\n  <div class=\"bordered w-50\">\r\n    <h1 class=\"mt-3 \">Results</h1>\r\n\r\n    <p>");
#nullable restore
#line 9 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\DojoSurveyWithModel\Views\Home\Result.cshtml"
  Write(Model.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n    <p>");
#nullable restore
#line 10 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\DojoSurveyWithModel\Views\Home\Result.cshtml"
  Write(Model.Location);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n    <p>");
#nullable restore
#line 11 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\DojoSurveyWithModel\Views\Home\Result.cshtml"
  Write(Model.Language);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n    <p>");
#nullable restore
#line 12 "C:\Users\allen\Desktop\dojo_practice\cSharp\ASPNETCore\DojoSurveyWithModel\Views\Home\Result.cshtml"
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