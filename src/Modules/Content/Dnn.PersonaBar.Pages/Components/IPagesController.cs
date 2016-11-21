﻿using System.Collections.Generic;
using Dnn.PersonaBar.Pages.Components.Dto;
using Dnn.PersonaBar.Pages.Services.Dto;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Entities.Tabs;
using DotNetNuke.Entities.Urls;

namespace Dnn.PersonaBar.Pages.Components
{
    public interface IPagesController
    {
        bool IsValidTabPath(TabInfo tab, string newTabPath, out string errorMessage);
        
        IEnumerable<TabInfo> GetPageList(int parentId = -1, string searchKey = "");
        
        List<int> GetPageHierarchy(int pageId);

        TabInfo MovePage(PageMoveRequest request);

        void DeletePage(PageItem page);

        void EditModeForPage(int pageId, int userId);

        TabInfo SavePageDetails(PageSettings pageSettings);

        IEnumerable<ModuleInfo> GetModules(int pageId);

        PageSettings GetDefaultSettings();

        void DeleteTabModule(int pageId, int moduleId);

        /// <summary>
        /// Returns a clean tab relative url based on Advanced Management Url settings
        /// </summary>
        /// <param name="url">Url not cleaned, this could containes blank space or invalid characters</param>
        /// <returns>Cleaned Url</returns>
        string CleanTabUrl(string url);

        /// <summary>
        /// Copy the given theme to all descendant pages
        /// </summary>
        /// <param name="pageId">page identifier</param>
        /// <param name="theme">Theme</param>
        void CopyThemeToDescendantPages(int pageId, Theme theme);

        /// <summary>
        /// Copy the current page permissions to all descendant pages
        /// </summary>
        /// <param name="pageId">page identifier</param>
        void CopyPermissionsToDescendantPages(int pageId);

        IEnumerable<Url> GetPageUrls(int tabId);
        PageSettings GetPageSettings(int pageId);
        PageUrlResult CreateCustomUrl(SaveUrlDto dto, PortalSettings portalSettings);
        PageUrlResult UpdateCustomUrl(SaveUrlDto dto, PortalSettings portalSettings);
        PageUrlResult DeleteCustomUrl(UrlIdDto dto, PortalSettings portalSettings);

        PagePermissions GetPermissionsData(int pageId);
    }
}