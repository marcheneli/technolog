﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Technolog.Domain.Entities;

namespace Technolog.DAL.Interfaces
{
    public interface IToolRepository : IRepository<Tool>
    {
        Tool GetByName(string name);
    }
}
