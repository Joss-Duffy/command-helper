# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Command Helper is a static HTML-based utility for quickly copying frequently-used commands and SQL queries to the clipboard. It consists of three standalone HTML files with no build system or dependencies.

## Architecture

- **index.html** - Main navigation page that loads other pages in an iframe. Uses localStorage to remember the last viewed page.
- **cmd.html** - Grid of clickable command buttons for common server operations (Tomcat, logs, cloud proxy, etc.). Click to copy command to clipboard.
- **SQL_Helper.html** - Dropdown-based SQL query selector with stored queries for database operations. Click the query display area to copy.

All pages are self-contained with inline CSS and JavaScript. No external dependencies or build process.

## Development

Open `index.html` directly in a browser to use the application. Changes can be tested immediately by refreshing the browser.
