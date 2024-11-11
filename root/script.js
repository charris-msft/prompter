const prompts = [
"Can you help me create a new deployment in my AKS cluster?",
"What is the command to scale a deployment to 5 replicas?",
"Can you provide the command to expose a deployment as a service?",
"How many aks resources do I have deployed grouped by region?",
"How many web app plans using the free tier do I have deployed grouped by region in my [placeholder] subscription?",
"How many web apps do I have deployed in eastus?",
"I'm getting deployment errors from the func cli, why?",
"The VS Code Azure Functions extension is saying 'No HTTP triggers found' when I try to deploy",
"Help me deploy my application to azure",
"How can I deploy this app?",
"Can you deploy my code to Azure please",
"Can you help me deploy my project to Azure",
"Deploy this project to Azure",
"Go deploy this project",
"I'd like to deploy my app",
"Take this project and make it deployable to Azure",
"Use azd to deploy my project",
"Create a deployment pipeline for this project",
"I don't want to deploy my app from my local machine, can you setup a remote solution instead?",
"I need a CI/CD pipeline so I can get my app deployed",
"I need help setting up a pipeline to deploy my app to Azure",
"I want to use AZD to create a deployment pipeline for my application",
"Let's use GitHub to deploy my app to Azure",
"Please help me create an automated deployment pipeline for my app",
"Set up a GitHub Actions pipeline to deploy my app to Azure",
"This project is ready for automated deployment, set that up",
"Can you undeploy my code from Azure please",
"Can you help me undeploy my project from Azure",
"Undeploy this project from Azure",
"Go undeploy this project",
"I'd like to undeploy my app",
"Undeploy my project with the Azure Developer CLI",
"Use azd to undeploy my project",
"How can I deploy my container app to Azure",
"How do I set up a CI/CD pipeline?",
"How do I install the Azure Developer CLI?",
"Upgrade my OpenAI instance to the latest version.",
"I want to scale my one of my Azure Functions.",
"Provide examples about Prometheus queries for AKS.",
"What benefits does AKS offer compared to traditional VM deployments?",
"Write a YAML script to schedule a CronJob in Kubernetes for deleting logs older than 30 days from a specific directory every Sunday at 4 AM.",
"Scale out my Kubernetes cluster to 5 nodes.",
"How to apply a YAML deployment file to an AKS cluster?",
"Generate a YAML file to set up a horizontal pod autoscaler in Kubernetes for a web application based on CPU usage.",
"Generate PromQL for the memory usage of my pods.",
"Add CanIpull health check to my cluster.",
"Help me deploy CanIpull to my AKS cluster.",
"Deploy AKS CanIpull for my container registry.",
"How do I deploy a web app in Azure?",
"How to create an App Service app and deploy code to a staging environment using CLI?",
"Create a script to deploy a webapp that will run in python.",
"Do you have example deployment models for Azure? SaaS, PaaS, etc",
"What database options does Azure have for web apps?",
"Generate a PowerShell script to create a new Azure Web App.",
"Generate an example YAML deployment file.",
"What serverless options does Azure have for web apps?",
"Create a guide for maximizing Azure App Services.",
"How to backup and restore a web app from a backup using CLI?",
"Generate Azure CLI script to connect an App Service app to an Azure Cache for Redis.",
"What is the best infrastructure for my application?",
"How do I set up my Azure environment?",
"What are ARM Templates and how do I use them?",
"How do I manage environments with the Azure Developer CLI?",
"What is the Azure Developer CLI?",
"What is the difference between Bicep and ARM?",
"How do I make sure my environments have the best security patterns?",
"What is azure's aca service?",
"How do I create a new Azure Function?",
"What is the difference between Azure Functions and Azure Logic apps?",
"Create a guide for integrating Azure Logic Apps with Azure Functions.",
"I want to automate Azure SQL Database scaling based on performance metrics using Azure Functions.",
"I want to create an Azure function in NodeJS.",
"I want to store data from Azure Function in NodeJS to Cosmos DB for Table.",
"What services does Azure OpenAI provide?",
"I want to create an API that calls AzureOpenAI GPT-3.5.",
"Where is GPT-4o mini available",
"What are the prerequisites for integrating Azure OpenAI?",
"Create a guide for creating and using AzureOpenAI resources.",
"How can I create a highly available architecture in Azure?",
"Explain the Azure Well-Architected Framework.",
"I want to build an AI application. What services can I use?",
"Which Azure service is best for hosting a scalable web application?",
"Which service should I use to create a web site.",
"How can I use Azure to build a scalable web application?",
"What are the options for managing containers in Azure?",
"Does Azure provide any example React applications to jumpstart development?",
"How do I use 3rd party services in my JavaScript source code hosted on Azure?",
"I'm working with Azure. Which service should I use to host a web site.",
"Generate a cheatsheet for managing clusters with CLI.",
"How do I deploy using my CI/CD pipeline?",
"Generate a guide for writing KQL queries.",
"What are differences between Bicep and Terraform?",
"Show me the Prometheus metrics for the CPU usage of my containers.",
"Show me the Prometheus metrics for the CPU usage of my container.",
"Can you provide Azure Monitor metrics for my AKS cluster?",
"Can you list alerts for my Azure Kubernetes Service?",
"Generate a Prometheus query for my AKS metrics.",
"Show me the Prometheus metrics for the CPU usage of my [container name] container.",
"Can you provide availability and risk alerts for my web app?",
"How do I monitor my application?",
"How can I improve my Azure web app's performance?",
"How do I improve my app's CPU usage?",
"Is there a way to monitor and optimize CPU usage in Azure App Service?",
"How can I improve the performance of my Azure web app?",
"Any available app code optimizations?",
"Show me how to optimize CPU usage for my Azure App Service.",
"How do I optimize code for my Azure App Service?",
"Update my web app configuration to use a new connection string",
"What are the best practices for security in Azure?",
"What are some ways to optimize my Azure Functions for cost efficiency.",
"List all AKS clusters grouped by version.",
"Show me all AKS clusters by version.",
"How many aks resources do I have in Azure grouped by region?",
"How many aks resources do I have deployed grouped by region?",
"How many web app plans using the free tier do I have deployed grouped by region?",
"How many web apps do I have deployed in eastus?",
"Can you list my container apps, a summary of their purpose and their URL?",
"What resource type do azure container apps have?",
"Display all app services running on an outdated runtime.",
"List all App Services by runtime stack.",
"List all Azure Functions by their properties.",
"How can I view event logs for my Azure App Service?",
"Show proactive tools to diagnose my web app.",
"How can I view event logs for my Azure App Service named [web app name]?",
"Cluster stuck in upgrading state while performing update operation.",
"I suspect there might be an anomaly in my Arc Kubernetes cluster. Can you run an anomaly detection investigation for me?",
"Help me troubleshoot my AKS cluster.",
"How do I troubleshoot my Azure Kubernetes Service (AKS)?",
"Help me test if ACR is attached to my AKS cluster.",
"Diagnose high CPU usage in my Azure App service.",
"Show me how to detect slow performance issues in my app service web app.",
"Investigate high CPU usage for my app service.",
"Detect downtime in my Azure Web App.",
"Is my web app experiencing any downtime?",
"What's causing latency in my Azure Web App?",
"Can you help me diagnose high CPU usage on my Azure app service?",
"Why am I seeing high memory usage in my App Service?",
"Help me analyze my web app downtime.",
"Help me diagnose slow performance in my Azure Web App.",
"Help me collect a memory dump from my Azure App Service.",
"Can you help me get a memory dump from my Azure Web App?",
"Can you help me diagnose high CPU usage on my Azure app service named [web app name]?",
"Detect downtime in my Azure Web App named [web app name].",
"Diagnose high CPU usage in my Azure App service named [web app name].",
"Help me analyze my web app downtime for [web app name].",
"Help me diagnose slow performance in my Azure Web App named [web app name].",
"Investigate high CPU usage for my app service named [web app name].",
"Is my jemapi web app experiencing any downtime?",
"Show me how to detect slow performance issues in my app service web app named [web app name].",
"What's causing latency in my Azure Web App named [web app name]?",
"Why am I seeing high memory usage in my [web app name] App Service?",
"I'm getting this error, what does it mean?",
"Show all Azure Functions without a backup configuration.",
"How can I increase rate limiting within my AzureOpenAI instance?",
"Why did my last deployment fail for the [web app name] web app?",
"How do I list all the pods in my AKS cluster?",
"How can I get the logs of a specific pod?",
"Show me how to describe a service in my AKS cluster.",
"What's the command to delete a pod by name?",
"How do I apply a configuration file to my AKS cluster?",
"How do I get the status of all nodes in my AKS cluster?",
"What's the command to set a context for my AKS cluster?",
"Can you list my container apps and their URL?",
"How many aks resources do I have in Azure grouped by region?",
"What is the default domain of my web app?",
"What types of app hosting solutions does Azure have?",
"When should I use AKS instead of ACA?",
"What's the difference between aca and aks?",
"For what scenarios is Azure Functions better than Web Apps?",
"Tell me the difference between a container app and a container app environment?",
"What are the different types of Azure OpenAI models available?",
"What types of containerized applications are suported in Azure?",
"My AppService container won't start",
"My Container App won't start",
"Why would I choose Azure ACA over Azure AKS",
"Do static web apps support static ip addresses?",
"What's the difference between ACA and AKS?",
"My users are reporting errors with my foobar container app",
"Can you look at my energy-api-1 container app's logs for any 404 errors?",
"Do my kube-apiserver logs show the last time a restart occured?",
"Find all instances of unauthorized access requests in my app's web requets logs",
"Find error messages in the logs that may correlate to 500 errors.",
"Grab all the errors in the logs between yesterday and today.",
"Has my container app's system console logs contained any warnings recently?",
"I want to see all the error messages in the logs.",
"I'm seeing errors with my app, look at the logs to find out why",
"Is there any 501 error in my app logs?",
"Show me all the 4xx errors in the logs in the last 6 hours.",
"My assistant-orchestrator AKS cluster is having performance problems",
"Diagnose my app to show me what problems it had encountered",
"Find out why my store-service-prod kube cluster is running slow",
"I'd like to investigate performance issues with my kube cluster",
"Is there anything wrong with my [web app name] web app?",
"Look into if my web app is having any downtime",
"Tell me what goes wrong with my app [web app name]",
"Troubleshoot my app for any possible issues in the last 3 hours",
"Troubleshoot why my web app is not responding",
"What errors did my app [web app name] have in the last 24 hours?",
"Why am I seeing 500 error when opening my website?",
"Get this code running on Azure",
"Initialize my project with the Azure Developer CLI",
"Run this app on Azure",
"Please start azd pipeline",
"Remove this code from running on Azure",
"Stop this app on Azure",
"Take this project down from Azure",
"Take down my application",
"How to host and scale SignalR on multiple servers?",
"How to do real-time communication in .NET?",
"How to push real-time updates to clients?",
"How to synchronize data across clients?",
"How to stream data to clients?",
"How to manage and scale WebSocket connections?",
"How to host and scale Socket.IO?",
"What do I need to do to configure my SignalR code to work with Azure SignalR service?",
"Evaluate my use of SignalR, is it following the best security practices?",
"What is the estimated cost for our usage?",
"How to stress test SignalR?",
"How to configure networking in Azure SignalR?",
"How to integrate SignalR with App Gateway/APIM/etc.?",
"I am getting xxx error code, what could be the reasons?",
"My SignalR client is not receiving messages, why?",
"Why are my SignalR clients being disconnected so often?",
"Where can I find metrics and logs for my SignalR app?",
"How to authenticate with Web PubSub?",
"What do I need to do to host my Socket.IO app on Azure?",
"How to configure web pubsub event handler?",
"Evaluate my use of SignalR, is it following the best security practices?",
"Is it best practice to have clients directly connect with Web PubSub?",
"What is the estimated cost for our usage?",
"How to stress test the Web PubSub?",
"I am getting xxx error code, what could be the reasons?",
"My web pubsub client is not receiving messages, why?",
"Why are my clients being disconnected so often?",
"Where can I find metrics and logs?",
"What is Azure AI Search and why use Azure AI Search?",
"How does pricing work for Azure AI Search?",
"How is Azure AI Search integrated with Azure OpenAI?",
"How is Azure AI Search integrated with Azure ML?",
"When should I use hybrid search, vector search, vs. semantic ranker in Azure AI Search?",
"Is Azure AI Search a vector database?",
"How does Azure AI Search ensure the accuracy and relevance of vector search results?",
"What support do you have for high scale multi-tenant applications in Azure AI Search?",
"What is integrated vectorization feature in Azure AI Search? From which data sources can I extract data and utilize integrated vectorization?",
"What is Azure AI Search AI enrichment? How does AI enrichment work? What are the benefits of using AI enrichment?",
"What is semantic ranker in Azure AI Search? How is it different from vector search?",
"What are top recommended code samples or solution accelerator for Azure AI Search?",
"What are some real world examples of businesses leveraging Azure AI Search?",
"Why is the cosmos db [cosmos db name] account expensive?",
"How many Azure OpenAI deployments do I have?",
"Provide an example Azure Bicep template to set up Azure API Management with a VNet integration.",
"How do I scale an Azure SQL database?",
"Create a Terraform configuration to deploy an Azure SQL database.",
"Help me create an API policy for rate-limiting.",
"Design a strategy for migrating on-premises SQL Server databases to Azure SQL Managed Instance.",
"Design a strategy to automate Azure SQL database backups using Azure Logic Apps.",
"Generate an Azure CLI script to create an Azure SQL database.",
"How to schedule Azure SQL database backups?",
"Help me configure an Azure SQL Database.",
"Generate a YAML file to create a CronJob in Kubernetes that backs up an Azure SQL database every night at 2 AM.",
"Use Azure CLI script to create a new Azure Cosmos DB account.",
"Generate Azure CLI script to create a new Azure Cosmos DB.",
"How does Azure Cosmos DB handle partitioning and scaling?",
"How do I choose a partition key?",
"How do I write a data access layer to cosmos db for this data model class?",
"Explain how and why I should use Azure Key Vaults.",
"How to Create VNet service endpoints for Azure Database for PostgreSQL using CLI?",
"Demonstrate how to configure Azure Redis Cache for high availability and disaster recovery.",
"How to create service principal in Azure?",
"What are the benefits and applications of Azure API Management?",
"Why use Azure Cosmos DB instead of Azure SQL?",
"In what scenarios is Azure Cosmos DB more advantageous than traditional SQL databases?",
"What do I need to go into production with my Cosmos db account, [cosmos db name]",
"How can I optimize my Azure SQL Database for better performance?",
"What is the optimal index policy for the products container in this account? [cosmos db name]",
"is there anything I can do to optimize this query for cosmos db?",
"List all Azure SQL Databases by performance tier.",
"List SQL Databases and their elastic pools.",
"list all my azure sql databases and their compute size",
"can you tell me which cosmos accounts are configured for multi-region writes?",
"What databases, containers are in the [cosmos db name] cosmos account and what are the index policies, partition keys and throughput values for each container?",
"Which of my [cosmos db] databases are not online?",
"Which of my postgres flexible databases are not running?",
"what is my postgres flexible database doing?",
"List all SQL databases without auditing and/or threat detection settings.",
"are there any Cosmos DB accounts in my subscription that I have left unsecured? (3)",
"Find all Key Vaults without purge protection enabled.",
"Why is my Azure database performance slow?",
"Azure database unable to connect from Power BI.",
"Why am I getting rate limited on this cosmos db account? [cosmos db name]",
"Why is this query slow on this cosmos db account? [cosmos db name]",
"is this cosmos db account down? [cosmos db name]",
"Which of my [cosmos db] databases are not online?",
"Which of my postgres flexible databases are not running?",
"list all my azure sql databases and their compute size",
"give me a count of storage accounts in eastus by subscription sorted from largest to smallest",
"what is my postgres flexible database doing?",
"how many storage accounts are in my [subscription name] subscription",
"Are any of my Cosmos DB accounts in West US 2?",
"I want to use CosmosDB to store my data",
"find me a sample application using django and postgres",
"Can I use Azure SDKs in the browser?",
"Does the C# storage SDK support chunked blob uploads and downloads?",
"Why would I use a Cosmos DB account over a SQL database?",
"Azure npm ARM sdk failing to install, what should I do?",
"403 unathorized blob listing",
"create cosmos db region quota exceeded",
"why would I use a blob storage?",
"Do I have more service fabric clusters or container apps?",
"What's my current month's cost?",
"How can we reduce our costs?",
"Which resources make up most of my total cost?",
"How can I reduce my Azure bill?",
"Help me identify resources unused in the last year.",
"What are some ways to reduce my Azure costs?",
"Forecast my cost for the next 3 months.",
"Help me identify unused resources.",
"Can you help me understand my cost?",
"Help me identify expensive resources.",
"Help me understand my Azure monthly costs.",
"Can you list all our budgets?",
"How does our cost this month compare to last month's.",
"What's our Azure credits balance?",
"Have we been using our reservations and savings plans?",
"Give me a CLI script to create a new storage account.",
"What are the best practices for setting up alerts in Azure Monitor?",
"What types of resources and services can be monitored using Azure Monitoring?",
"Explain how and why I should use Azure Monitor.",
"Guide for using Azure Logic Apps to automate responses to Azure Monitor alerts.",
"How can I use Azure for big data analytics?",
"What tools does Azure for big data analytics?",
"How do I create data pipelines with Azure Data Factory?",
"What security features are available in Azure Databricks to protect my data?",
"How can I achieve load balancing in Azure.",
"Generate a YAML configuration for an Azure Load Balancer with a basic rule set.",
"Set up a new log analytics workspace.",
"Generate a PowerShell script to create a new Azure Machine Learning workspace.",
"What is the difference between Azure AI services and Azure Machine Learning?",
"Help me standup a simple server with a fixed IP address.",
"How do I use Azure Service Bus?",
"I need a walkthrough on setting up Azure Service Bus with topic subscriptions for event-driven architecture.",
"How to pull data from storage blob in React?",
"Illustrate the process of setting up Azure Blob Storage lifecycle management policies using Azure CLI.",
"Configuration for a high-availability Azure Storage account setup with geo-redundancy.",
"Outline steps to secure Azure Blob Storage with private endpoints and Azure Private Link.",
"Generate Azure CLI script to create a new storage account.",
"Give me the code to create a new storage account with CLI.",
"How to list all backups in an Azure storage container?",
"How to upload a blob to a storage container with JavaScript?",
"How to enable last access time tracking for blobs?",
"How to upload a storage container, with JavaScript.",
"How to use Azure CLI script to backup an Azure SQL single database to an Azure storage container.",
"Generate Azure CLI script to backup an Azure SQL single database to an Azure storage container.",
"Give me a CLI script to create a new storage account.",
"I want to apply policies to my data and better monitor compliance.",
"How can Azure help me simplify integrations and create automated workflows?",
"Help me orchestrate and automate my data processing workflows.",
"Help me migrate my servers.",
"How do I convert ARM templates to Bicep?",
"How to create a function app with a named Storage account connection using Azure CLI?",
"How do I retrieve metadata for a blob with .NET?",
"Generate a cheatsheet for managing resources with CLI.",
"Generate a cheatsheet for managing subscriptions with CLI.",
"Generate a cheatsheet for managing subscriptions with Azure Powershell.",
"Can you help me with submitting a support case?",
"Can I use K6 to author tests for Azure Load Testing?",
"Can you help me choose the right Azure storage solution?",
"What are the differences between standard and premium Azure file shares?",
"Help me complete my Azure certifications.",
"What are the benefits and applications of using Terraform?",
"What are the benefits and applications of using Bicep?",
"Show me Azure Monitor active alerts.",
"What Azure monitor metrics are available for my resource?",
"Show me how to set up alerts for my Azure resources?",
"I want to proactively monitor the CPU usage for my app. Is there a tool in Azure that can help?",
"I want to set up a new alert for my Azure resources.",
"Help me set up email notifications for Azure alerts.",
"What are the benefits and applications of Azure Monitor?",
"How do I enable hibernation on my Dev Box image from the Azure CLI?",
"Can I convert an existing standard general-purpose v2 storage account to a Premium block blob storage account?",
"What are some strategies to optimize my Azure Event Hubs for higher throughput?",
"Can you help me optimize my Azure Machine Learning workspace for better model training?",
"What are some strategies to optimize my Azure Traffic Manager for better load balancing?",
"how many empty resource groups do I have?",
"Generate a table with the count of resources per public IP address.",
"List all storage accounts that are accessible from the internet.",
"How many storage accounts do we have by account kind?",
"List all storage accounts with encryption disabled.",
"List all storage accounts with encrytion disabled.",
"give me a count of storage accounts in eastus by subscription sorted from largest to smallest",
"how many storage accounts are in my [subscription name] subscription",
"Which resources were modified in the last 24 hours?",
"Show me my top 10 resource types by count of resources.",
"Generate a query to list all resources that were modified in the last 7 days.",
"List resources that have been created or modified in the last 24 hours.",
"Which resources are non-compliant?",
"How many resources created in the last 30 days across all subscriptions?",
"Show me my count of Azure resources by type. Sort by count desc.",
"Write a query that finds all resources that were created yesterday.",
"Show my top 10 management groups by count of subscriptions.",
"Provide a list of all resource types that are in a Noncompliant state.",
"Which resource groups have non compliant resources? Sort by count of resources that are noncompliant.",
"Show all resources non-compliant by subscription.",
"Display all resources not compliant with my policies.",
"What is the distribution of resource types across my subscriptions?",
"How many subscriptions do I have with more than 50 resources?",
"Show count of resources by resource group. Show top 5 by count desc.",
"How do I increase the quota available in my subscription for Azure Deployment Environments?",
"Find unused public IP addresses in my subscriptions.",
"List all my Storage Accounts by last access time.",
"Show top Azure SQL Databases ordered by storage usage.",
"Show Azure SQL Databases approaching their max storage capacity.",
"How many resources do I have in each region?",
"Which resources are using our reservations?",
"What is the count of each resource type in my most populated resource group?",
"What is the distribution of my resources by subscription? List order count desc.",
"How many resources of each type do I have in my most populated resource group?",
"What's the best way to manage multiple Azure subscriptions?",
"Is there a way to manage Azure resources across multiple tenants?",
"Help me write a script to move all my resources to one location.",
"How many critical alerts do I have?",
"Show me critical alerts this week.",
"I can't connect to my dev box with an RDP Client. How can I fix it?",
"How do I manage DNS settings in Azure?",
"My application needs help processing real-time events.",
"What are some ways to secure my Azure storage account?",
"Check the data resiliency of my storage account.",
"Help me check the security posture of my storage account.",
"What can we do to secure my storage account?",
"How can I make my storage account more resilient?",
"I want to perform a data resiliency check on my Azure Storage account.",
"Help me secure my Azure storage account.",
"How can I retrieve the last access time to a storage account?",
"How do I check data resiliency for my Azure storage account?",
"Restore my storage account.",
"how many empty resource groups do I have?",
"Get me a count of key vaults in my 'sandbox' resource group",
"Help me find all of my resources that are tagged with 'environment: production'",
"Show me the size of the largest disk I have",
"Which of my subscriptions has the most resource groups?",
"I want to know if the Azure CLI can be used to manage billing.",
"Show me how to create a resource group using an Azure python SDK?",
"The subscription is not allowed to create or update the serverfarm.",
"List advanced capabilities in Copilot for Azure",
"Can you please summarize my VM costs.",
"How much do virtual machines contribute to total costs?",
"In which of my resource groups in my Deployments_Depot subscription do I storage accounts?",
"I want to automate the deployment of Azure Virtual Desktop infrastructure using ARM templates.",
"How do I set up a hybrid cloud with Azure?",
"Create a PowerShell script to set up Azure Policy assignments to manage resource compliance across multiple subscriptions.",
"Explain how and why I should Azure Policy.",
"cr",
"Illustrate how to use Azure Policy to enforce tagging compliance across all resources.",
"How to create and manage a Linux pool in Azure Batch using CLI?",
"Can you help me set up a CI/CD pipeline using Azure DevOps?",
"Illustrate how to model and create a digital twin of a physical environment using Azure Digital Twins and connect it with IoT Hub for real-time updates.",
"How do I use Azure's IoT services?",
"How to attach a disk to a VM using az CLI ?",
"How do I create a virtual network in Azure?",
"How to create a virtual network using Terraform?",
"How do I balance inbound network traffic to my application?",
"Help me set up a Content Delivery Network (CDN) in Azure.",
"How do you configure a contact profile in Azure Orbital?",
"How can I best leverage Azure Sentinel?",
"Generate an ARM template for a VM resource with public IP address.",
"Script to automate the configuration of diagnostic settings for all VMs to send logs and metrics to Azure Monitor.",
"Enable backup on my virtual machine.",
"What benefits does VM scalesets provide?",
"I want to enable replication for my VM for disaster recovery.",
"What Azure services are available to make a global marketplace?",
"How can Microsoft Defender for Cloud help me secure my resources?",
"Generate a cheatsheet for managing VMs with CLI.",
"What are some Azure CLI commands for managing VMs?",
"What are the benefits and applications of Azure Policy?",
"Can I manage my hybrid cloud in one environment?",
"List all alerts for my Azure edge resources.",
"How are my Arc resources doing?",
"List all alerts for arc k8s clusters.",
"Summarize the status of my Azure Stack HCI clusters.",
"Summarize the health and alerts for my Azure Arc Kubernetes clusters.",
"Is there any alert with my HCI cluster?",
"How do I monitor Batch jobs?",
"Give me a chart of disk latency statistics for the last week for my VM.",
"Create an Azure support ticket for me.",
"Show me the CPU utilization trend over the past 24 hours for my VM.",
"Show me platform metrics for VMs.",
"Restart my VMs.",
"How can I optimize my Azure IoT Hub for better device connectivity?",
"Find all virtual networks that are not connected to a subnet.",
"List all private endpoints in a subnet ending with 'backend'.",
"How many virtual machines are running right now?",
"List all virtual machines across my subscriptions by size.",
"Summarize my VMs by region, size and OS.",
"Find the virtual machines that are running right now.",
"I need a bash script to list all VMs running.",
"Which VMs have premium SSDs larger than 128 GB?",
"Which VMs are running right now? Please stop them.",
"I want to retrieve virtual machines using regex match.",
"List all the updates applied to my Linux virtual machines.",
"I want to retrieve virtual machines matched by regex.",
"Write an ARG query that fetches virtual machines scale sets, sorted by creation date descending.",
"Summarize all virtual machines across my subscriptions count by size sort by highest",
"Show me all my Linux VMs along with their creation date",
"Show me all Linux Virtual Machines that have secure boot enabled",
"Show me all my VMs with internet access",
"Find all unattached Azure Managed Disks, potentially indicating unused resources that could be deleted for cost savings.",
"List all virtual networks not connected to a firewall.",
"How can I improve outbound network connectivity for my VMs?",
"Show me all disks that are not attached to any virtual machine.",
"Display all managed disks unattached to any virtual machine.",
"Show me the count of OS update installation done.",
"Help me automate my VM's daily tasks.",
"What's the easiest way to backup my Azure VMs?",
"Show me CPU utilization for my VM.",
"Analyze anomalies in my edge resources.",
"Can you run anomaly detection on my Azure edge resources?",
"Any anomaly in my Arc k8s this week?",
"I'm facing an error in the portal with my IoT device.",
"My custom IoT Edge components are not working.",
"How does Azure ExpressRoute enhance connectivity between on-premises environments and cloud?",
"My Azure VM is not starting, what could be the reason?",
"How do I connect to my virtual machine via SSH/RDP?",
"How do I monitor the health of my virtual machines?",
"Why is my Azure VM not starting?",
"I need to assign a DNS name to a VM using a script.",
"I want to reset the SSH key on my VM.",
"Restart my VMs that have the tag 'env:non-production'.",
"Restart VMs with tag env:test.",
"Reset my VM SSH key.",
"List all the virtual machines in my subscription",
"What is the creation date of my most recently created virtual machine?",
"How do I create a virtual machine in JavaScript?",
"What are common networking troubleshooting steps for when storage accounts are behind a VNet?",
"Summarize my activity this month.",
"Why did my last deployment fail?",
"Is there any outage impacting me?",
"Are there any Azure outages impacting my resources?",
"Is there an Azure outage affecting my services?",
"Help me analyze my app for high CPU usage.",
"Why is my application slow?",
"Help me detect and diagnose performance issues in my database queries.",
"What tools can I use to implement database schema updates?",
"Take a memory dump of my app.",
"Help me with submitting a support case.",
"I need to create a support ticket.",
"Help me analyze my jemapi app for high CPU usage.",
"Why is my [web app name] application slow?",
"Create an OpenAI deployment with gpt-3.5-turbo model using Terraform template. Set the version of the model to 0613",
"What's my current month's cost for my OpenAI resources?",
"Do I have a GPT4o model deployed in the US?",
"What is using up my GPT4o model quota?",
"what are all my resource groups and everything inside each one",
"list all the resource groups in subscription [subscription name]",
"Tell me about integrated vectorization",
"Give me a detailed description of AI Search",
"Give me a detailed description of Azure AI Search",
"can I use Container Apps for free?",
"how do I deploy my azd template to Azure?",
"Can you help me build an RAG chat app with GPT-4o?",
"why is my ReallyImportantWebsite webapp running slow?",
"are there any errors in the logs of my SuperCoolDemo Container App?",
"List the regions where gpt-4o is available (then 'what about mini')",
"Help me create an AKS cluster",
"Which azure services can run my container?",
"Can you show me the cost breakdown by service for Aug 2024?",
"Can you show me the cost breakdown by service for Aug 2024 for my current subscription?",
"What kinds of AI services does Azure offer?",
"What’s the difference between Azure Container Apps and Azure Kubernetes Service?",
"What’s the URL for my webapp named [insert name]?",
"How many storage accounts do I have in eastus?",
"Summarize the recent logs in my Azure Container Apps/Azure Kubernetes Service application",
"Help me diagnose a problem with Azure Kubernetes Service",
"Help me deploy my azd template to the cloud",
"I'd like to build a Python web API with a MongoDB database and a React.js front end"
];

function generatePrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const prompt = prompts[randomIndex];
    document.getElementById('prompt').innerText = prompt;
    document.getElementById('copyButton').style.display = 'inline';
}

function copyPrompt() {
    const promptText = document.getElementById('prompt').innerText;
    navigator.clipboard.writeText(promptText).then(() => {
        alert('Prompt copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
