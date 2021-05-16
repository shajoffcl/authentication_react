import {
  Module,
  AdminHome,
  BankDetailReport,
  BankDetailApproval,
  AccountBlockDisputeList,
  UserBanksNameList,
  UserDocumnetList
} from "./views/index";

export const routes = [
  {
    path: "/admin",
    name: "Admin",
    exact: true,
    component: AdminHome,
  },
  {
    path: "/admin/admin_compliance",
    name: "Admin Compliance",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/business_report",
    name: "Business Report",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/admin_compliance/getBankDetailReport",
    name: "Bank Details Report",
    component: BankDetailReport,
  },
  {
    path: "/admin/admin_compliance/userDocumentList",
    name: "User Document List",
    component: UserDocumnetList,
  },
  {
    path: "/admin/admin_compliance/getBankInfoForApproval",
    name: "Bank Detail Approval",
    component: BankDetailApproval,
  },
  {
    path: "/admin/admin_compliance/getDisputeRaised",
    name: "Account Block Dispute List",
    component: AccountBlockDisputeList,
  },
  {
    path: "/admin/user",
    name: "Manage User",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/user/bankNameIdShow",
    name: "Banks Name",
    component: UserBanksNameList,
  },
  {
    path: "/admin/cms",
    name: "Content Management System",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/cms/contentApproval",
    name: "Content Approval System",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/admin",
    name: "Data Panel",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/email_marketing",
    name: "Email Marketting",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/cms/emailTemplatesList",
    name: "Email Templates",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/internal_data/index",
    name: "Internal Data",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/leaderboard",
    name: "Leaderboard Panel",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/manage_roles/getAdminIndex",
    name: "Manage Admin",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/bonus_code",
    name: "Manage Bonus Code",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/promotions",
    name: "Manage Promotions",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/sms/index",
    name: "Marketing",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/mis_report",
    name: "MIS Report",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/operation_fin",
    name: "Operation Finance",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/operation_tech",
    name: "Operation Technical",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/partner/index",
    name: "Partners",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/reactivation_panel",
    name: "Reactivation Panel",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/ticket_system",
    name: "Ticket System",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/tourney_calendar/index",
    name: "Tourney Calendar",
    exact: true,
    component: Module,
  },
  {
    path: "/admin/tourney_panel/index",
    name: "Tourney Panel",
    exact: true,
    component: Module,
  },
  
];
