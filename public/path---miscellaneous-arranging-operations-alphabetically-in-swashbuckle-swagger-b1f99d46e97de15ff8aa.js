webpackJsonp([0x1301baf48d295c00],{"./node_modules/json-loader/index.js!./.cache/json/miscellaneous-arranging-operations-alphabetically-in-swashbuckle-swagger.json":function(e,a){e.exports={data:{markdownRemark:{html:"<p><a href='https://github.com/domaindrivendev/Swashbuckle' target='_blank' rel='nofollow'>Swashbuckle</a> seamlessly adds a <a href='http://swagger.io/' target='_blank' rel='nofollow'>Swagger</a> to WebAPI projects. However, the operations on the page do not appear in alphabetical order.</p>\n<p>Although the operations will not appear in alphabetical order, Swashbuckle allows custom filters and with a little coding, the order can be shown in alphabetical order.</p>\n<h2>Code Example</h2>\n<p>The code below creates a <a href='https://github.com/domaindrivendev/Swashbuckle#documentfilter' target='_blank' rel='nofollow'>DocumentFilter</a> which is then applied to the final document as outlined <a href='https://github.com/domaindrivendev/Swashbuckle#modifying-generated-operations' target='_blank' rel='nofollow'>here</a>.</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>using Swashbuckle.Swagger;\nusing System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Web;\n\nnamespace YourNamespace.Swagger.Extensions\n{\n    public class CustomDocumentFilter : IDocumentFilter\n    {\n        public void Apply(SwaggerDocument swaggerDoc, SchemaRegistry schemaRegistry, System.Web.Http.Description.IApiExplorer apiExplorer)\n        {\n            //make operations alphabetic\n            var paths = swaggerDoc.paths.OrderBy(e => e.Key).ToList();\n            swaggerDoc.paths = paths.ToDictionary(e => e.Key, e => e.Value);\n\n            //controller comments do not get added to swagger docs. This is how to add them.\n            AddControllerDescriptions(swaggerDoc, apiExplorer);\n\n        }\n\n        private static void AddControllerDescriptions(SwaggerDocument swaggerDoc, System.Web.Http.Description.IApiExplorer apiExplorer)\n        {\n            var doc = new YourPortal.Areas.HelpPage.XmlDocumentationProvider(GetXmlCommentsPath());\n\n            List<Tag> lst = new List<Tag>();\n            var desc = apiExplorer.ApiDescriptions;\n            ILookup<HttpControllerDescriptor, ApiDescription> apiGroups = desc.ToLookup(api => api.ActionDescriptor.ControllerDescriptor);\n            foreach (var apiGroup in apiGroups)\n            {\n                string tagName = apiGroup.Key.ControllerName;\n                var tag = new Tag { name = tagName };\n                var apiDoc = doc.GetDocumentation(apiGroup.Key);\n                if (!String.IsNullOrWhiteSpace(apiDoc))\n                    tag.description = apiDoc;\n                lst.Add(tag);\n\n            }\n            if (lst.Count() > 0)\n                swaggerDoc.tags = lst.ToList();\n        }\n        private static string GetXmlCommentsPath()\n        {\n            return System.Web.Hosting.HostingEnvironment.MapPath(\"~/App_Data/YourPortal.xml\");\n        }\n    }\n}</code></pre>\n      </div>\n<p>Now you can simply add it to the config file like this</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>.EnableSwagger(c =>\n    {\n        ...\n        c.DocumentFilter<YourNamespace.Swagger.Extensions.CustomDocumentFilter>();\n        ...\n    }\n);</code></pre>\n      </div>\n<h2>References:</h2>\n<ul>\n<li><a href='https://github.com/domaindrivendev/Swashbuckle' target='_blank' rel='nofollow'>Swashbuckle</a></li>\n<li><a href='http://swagger.io/' target='_blank' rel='nofollow'>Swagger</a></li>\n<li><a href='https://github.com/domaindrivendev/Swashbuckle#documentfilter' target='_blank' rel='nofollow'>DocumentFilter</a></li>\n<li><a href='https://gist.github.com/pallu/0f28e98fa89d2855a321' target='_blank' rel='nofollow'>Gist for code above</a></li>\n</ul>",fields:{slug:"/miscellaneous/arranging-operations-alphabetically-in-swashbuckle-swagger/"},frontmatter:{title:"Arranging Operations Alphabetically in Swashbuckle Swagger"}}},pathContext:{slug:"/miscellaneous/arranging-operations-alphabetically-in-swashbuckle-swagger/"}}}});
//# sourceMappingURL=path---miscellaneous-arranging-operations-alphabetically-in-swashbuckle-swagger-b1f99d46e97de15ff8aa.js.map